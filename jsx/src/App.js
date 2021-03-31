import logo from './logo.svg';
import './App.css';

function App() {
  const name = '강냉이';
  const name2 = undefined;
  const style = {
    //backgroud-color는 backGroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
    backGroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }
  // jsx 내부에서는 if문을 사용할수가 없어서 조건부 연산자를 사용
  // && 기호를 사용하여 조건부 연산자로서 사용 가능
  return (
    <div className="react">
      {name === '강냉이' ? (
        <div>
          <h1>{name} 안녕</h1>
          <h2>잘 작동하니?</h2>
          {/* 주석은 이렇게 처리한다 */}
        </div>
      ) : (
        <div>
          <h2>리액트가 아닙니다</h2>
        </div>
      )}

      {name === '리웩트' && <div><h1>리액트입니다</h1></div> }

      <div>
        <h1>{name2} undefined 렌더링 테스트</h1>
      </div>
        
    </div>
  );

  //return name2;
}

export default App;
