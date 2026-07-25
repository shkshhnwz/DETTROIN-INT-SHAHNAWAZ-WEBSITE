import { useRef, useEffect, useState, useMemo, useId } from 'react';
import './CurvedTextLayer.css';

const CurvedLoop = ({
  marqueeText = '',
  speed = 2,
  className,
  curveAmount = 400,
  direction = 'left',
  interactive = true
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef(0);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,150 C 500,${150 + curveAmount} 1500,${150 - curveAmount} 2100,150`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil(2400 / textLength) + 3)
        .fill(text)
        .join('')
    : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (!measureRef.current) return;

    const measure = () => {
      if (measureRef.current) {
        const length = measureRef.current.getComputedTextLength();
        if (length > 0) {
          setSpacing(length);
          return true;
        }
      }
      return false;
    };

    // Try measuring immediately
    if (measure()) return;

    // Retry on subsequent animation frames until layout is ready
    let frameId;
    const poll = () => {
      if (measure()) return;
      frameId = requestAnimationFrame(poll);
    };
    frameId = requestAnimationFrame(poll);

    // Also measure when fonts are fully loaded
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(measure);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [text, className]);

  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute('startOffset', initial + 'px');
      offsetRef.current = initial;
    }
  }, [spacing]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === 'right' ? speed : -speed;
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        let newOffset = currentOffset + delta;

        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;

        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        offsetRef.current = newOffset;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = e => {
    if (!interactive) return;
    dragRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = e => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
    let newOffset = currentOffset + dx;

    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;

    textPathRef.current.setAttribute('startOffset', newOffset + 'px');
    offsetRef.current = newOffset;
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    setIsDragging(false);
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  const cursorStyle = interactive ? (isDragging ? 'grabbing' : 'grab') : 'auto';

  return (
    <div
      className="curved-loop-jacket"
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.3s ease', cursor: cursorStyle }}
    >
      <svg
        className="curved-loop-svg"
        viewBox="0 -150 2000 600"
        style={{ pointerEvents: 'none' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <text ref={measureRef} xmlSpace="preserve" style={{ opacity: 0, pointerEvents: 'none', position: 'absolute' }}>
          {text}
        </text>
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" />
        </defs>
        <use
          href={`#${pathId}`}
          stroke="#03C03C"
          strokeWidth="54"
          strokeLinecap="round"
          style={{ pointerEvents: 'auto', cursor: cursorStyle }}
        />
        {ready && (
          <text
            fontWeight="bold"
            xmlSpace="preserve"
            className={className}
            dy="8"
            style={{ pointerEvents: 'auto', cursor: cursorStyle }}
          >
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offsetRef.current + 'px'} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
