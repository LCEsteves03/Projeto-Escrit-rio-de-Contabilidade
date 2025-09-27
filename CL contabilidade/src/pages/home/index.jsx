import './index.css';
import Slider from "react-slick";
import { FaRegCheckCircle, FaLaptopCode, FaUserTie, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const infosData = [
    { title: "Chega de imprevistos", text: "Chega de imprevistos no pagamento de impostos, falta de clareza e suporte que não resolve." },
    { title: "Organização Fiscal", text: "Com meu acompanhamento, você terá suas obrigações fiscais entregues no prazo, tudo organizado e transparente." },
    { title: "Mais Tranquilidade", text: "Em uma plataforma simples e fácil de usar, proporcionando mais tranquilidade e confiança para focar no crescimento do seu negócio." }
  ];

  const PrevArrow = ({ onClick }) => (
    <FaArrowLeft className="slick-arrow left-arrow" onClick={onClick} />
  );

  const NextArrow = ({ onClick }) => (
    <FaArrowRight className="slick-arrow right-arrow" onClick={onClick} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div id='main'>
      <div id="cabeçalho">
        <div id='menu_superior'>
          <div id='logo'><img src="./src/assets/CL_logo_cinza.jpeg" alt="logo" /></div>
          <div id="serves">
            <a href="">Serviços</a>
            <a href="">Especialidades</a>
            <a href="">Contatos</a>
            <button>FALE CONOSCO</button>
          </div>
        </div>

        <div id='corpo'>
          <div id='infos'>
            <div id='card_title'><h2>CL Contabilidade & RH:</h2></div>
            <div id='card_subtitle'><h3>firmamos um compromisso com o seu sucesso !</h3></div>

            <div id='card_infos_corpo'>
              <Slider {...settings}>
                {infosData.map((info, index) => (
                  <div key={index} className="info-slide">
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
                  </div>
                ))}
              </Slider>
            </div>

            <div id='cards_especialidades'>
              <div id='card_1'>
                <FaRegCheckCircle className="icon" />
                <div id='title_card'><h2>Contabilidade para Comércio</h2></div>
                <div id='sub_card'><p>Controle financeiro ágil e inteligente para fortalecer sua operação no varejo e aumentar a lucratividade.</p></div>
              </div>

              <div id='card_2'>
                <FaUserTie className="icon" />
                <div id='title_card'><h2>Contabilidade para MEI</h2></div>
                <div id='sub_card'><p>Praticidade e eficiência para microempreendedor individual, com foco em crescimento e segurança.</p></div>
              </div>

              <div id='card_3'>
                <FaLaptopCode className="icon" />
                <div id='title_card'><h2>Contabilidade para Prestadores de Serviço</h2></div>
                <div id='sub_card'><p>Soluções contábeis adaptadas à dinâmica do setor, com foco em segurança e crescimento.</p></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
