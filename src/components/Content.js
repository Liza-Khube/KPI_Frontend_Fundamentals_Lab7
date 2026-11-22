import React from 'react';
import Image from './Image';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby1ColorState: null,
      hobby2ColorState: null,
      images: [{ id: 1, width: null }],
      sizeStep: 50,
      minWidth: 50,
      baseWidth: 800,
    };
  }

  changeState(currState) {
    if (currState === null) return 'color1';
    if (currState === 'color1') {
      return 'color2';
    } else {
      return 'color1';
    }
  }

  getHobbyClassState(hobbyColorState, color1, color2) {
    const currState = this.state[hobbyColorState];
    if (currState === 'color1') return color1;
    if (currState === 'color2') return color2;
    return '';
  }

  handleToggleHobby1Color = () => {
    this.setState((prevState) => ({
      hobby1ColorState: this.changeState(prevState.hobby1ColorState),
    }));
  };

  handleToggleHobby2Color = () => {
    this.setState((prevState) => ({
      hobby2ColorState: this.changeState(prevState.hobby2ColorState),
    }));
  };

  handleAddImage = () => {
    this.setState((prevState) => ({
      images: [
        ...prevState.images,
        {
          id: Date.now() + Math.random(),
          width: null,
        },
      ],
    }));
  };

  handleIncreaseImage = () => {
    this.setState((prevState) => {
      const { images, sizeStep, baseWidth } = prevState;
      if (images.length === 0) return null;

      const lastIndex = images.length - 1;
      const lastImg = images[lastIndex];
      const currentWidth = lastImg.width ?? baseWidth;

      const updatedImages = [...images];
      updatedImages[lastIndex] = {
        ...lastImg,
        width: currentWidth + sizeStep,
      };

      return { images: updatedImages };
    });
  };

  handleDecreaseImage = () => {
    this.setState((prevState) => {
      const { images, sizeStep, minWidth, baseWidth } = prevState;
      if (images.length === 0) return null;

      const lastIndex = images.length - 1;
      const lastImg = images[lastIndex];
      const currentWidth = lastImg.width ?? baseWidth;
      const nextWidth = currentWidth - sizeStep;

      if (nextWidth < minWidth) return null;

      const updatedImages = [...images];
      updatedImages[lastIndex] = {
        ...lastImg,
        width: nextWidth,
      };

      return { images: updatedImages };
    });
  };

  handleDeleteImage = () => {
    this.setState((prevState) => {
      if (prevState.images.length === 0) return null;
      return {
        images: prevState.images.slice(0, -1),
      };
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <p>
          <b>Дата та місце народження:</b> 18 липня 2006 року, м. Донецьк
        </p>
        <p>
          <b>Освіта:</b> Школа №3, м. Донецьк; Школа №9, м. Покровськ; НТУУ "КПІ" ім. Ігоря
          Сікорського, м. Київ
        </p>
        <br />
        <b>Хобі:</b>
        <ul>
          <li
            id="hobby-sport"
            className={this.getHobbyClassState(
              'hobby1ColorState',
              'orangeTextPurpleBg',
              'purpleTextOrangeBg',
            )}
            onClick={this.handleToggleHobby1Color}
          >
            Спорт
          </li>
          <li
            id="hobby-drawing"
            className={this.getHobbyClassState(
              'hobby2ColorState',
              'redTextBlueBg',
              'blueTextRedBg',
            )}
            onClick={this.handleToggleHobby2Color}
          >
            Малювання
          </li>
          <li>Шиття</li>
          <li>Комп'ютерні ігри</li>
          <li>Настільні ігри</li>
        </ul>
        <br />
        <b>Улюблені фільми:</b>
        <ol>
          <li>Усі фільми франшизи "Аватар"</li>
          <li>"Привиди у Венеції"</li>
          <li>"Джуманджі"</li>
          <li>"Скриті фігури"</li>
          <li>"Боб Марлі: Одне кохання"</li>
          <li>"1+1"</li>
        </ol>
        <br />
        <b>Улюблене місто:</b>
        <p>
          <b>Одеса</b> - місто-порт на північно-західному узбережжі Чорного моря. Це третє за
          величиною місто України після Києва і Харкова, головний промисловий, культурний,
          транспортний, науковий і курортний центр Північного Причорномор’я.
          <br />
          Одеса була заснована Катериною II в 1794 році. <br />
          Одеса - місто надзвичайної краси, його не даремно називають блакитною перлиною біля моря.
          Він відомий славними пам'ятками, дивно веселими одеситами, цілющими курортами, красою
          Чорного моря і великою кількістю сонця, навіть в зимовий час. <br />
          Одеса має багато гучних епітетів, найвідомішими з яких є: Одеса-мама, Південна Пальміра і
          статус міста гумористів. Одеса є дивним містом з точки зору сформованої тут культури і
          способу життя, які орієнтовані на людські відносини. Також відома особлива одеська мова,
          яка є колоритною візитною карткою міста. <br />У місті багато історичних будівель та
          об'єктів, пам'ятників, театрів і музеїв.
        </p>
        <div id="odessa-image-container">
          {images.map((item) => (
            <Image key={item.id} width={item.width} />
          ))}
        </div>
        <div id="buttons-container">
          <button className="add-img" type="button" onClick={this.handleAddImage}>
            Додати
          </button>
          <button className="resize-img" type="button" onClick={this.handleIncreaseImage}>
            Збільшити
          </button>
          <button className="resize-img" type="button" onClick={this.handleDecreaseImage}>
            Зменшити
          </button>
          <button className="delete-img" type="button" onClick={this.handleDeleteImage}>
            Видалити
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
