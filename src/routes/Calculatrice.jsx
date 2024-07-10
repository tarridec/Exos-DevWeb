import useCalc from '../hooks/useCalc';
import Button from '../components/Button';

const Calculatrice = () => {
  const {onTap, display, history} = useCalc();

  return (
    <div className="flex items-center gap-5 justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col gap-1">
        <div className="border h-[80px] rounded-xl bg-slate-400 text-white max-w-[237px] overflow-x-auto">
          {display}
        </div>
        <div className="flex gap-1">
          <Button className="flex-1"></Button>
          <Button className="flex-1" onClick={onTap}>C</Button>
          <Button className="flex-1" onClick={onTap}>{"<"}</Button>
          <Button className="flex-1" onClick={onTap}>/</Button>
        </div>
        <div className="flex gap-1">
          <Button className="flex-1" onClick={onTap}>7</Button>
          <Button className="flex-1" onClick={onTap}>8</Button>
          <Button className="flex-1" onClick={onTap}>9</Button>
          <Button className="flex-1" onClick={onTap}>*</Button>
        </div>
        <div className="flex gap-1">
          <Button className="flex-1" onClick={onTap}>4</Button>
          <Button className="flex-1" onClick={onTap}>5</Button>
          <Button className="flex-1" onClick={onTap}>6</Button>
          <Button className="flex-1" onClick={onTap}>-</Button>
        </div>
        <div className="flex gap-1">
          <Button className="flex-1" onClick={onTap}>1</Button>
          <Button className="flex-1" onClick={onTap}>2</Button>
          <Button className="flex-1" onClick={onTap}>3</Button>
          <Button className="flex-1" onClick={onTap}>+</Button>
        </div>
        <div className="flex gap-1">
          <Button className="flex-1"></Button>
          <Button className="flex-1" onClick={onTap}>0</Button>
          <Button className="flex-1" onClick={onTap}>.</Button>
          <Button className="flex-1" onClick={onTap}>=</Button>
        </div>
      </div>
      <div className="h-[460px] w-[240px] py">
        <h4 className="text-center text-slate-700">Historique</h4>
        <div className="flex flex-col gap-2 px-3">
          {history.map(h => (
            <div className="text-2xl text-slate-600 pb-2 border-b-2" key={h}>{h}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculatrice;