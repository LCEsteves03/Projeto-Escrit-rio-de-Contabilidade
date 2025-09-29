import './index.css';
import Slider from "react-slick";
import { FaRegCheckCircle, FaLaptopCode, FaUserTie, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const infosData = [
  { 
    title: "Sem Surpresas Fiscais", 
    text: "Tenha previsibilidade no pagamento de impostos e elimine multas indesejadas com uma contabilidade estratégica e organizada." 
  },
  { 
    title: "Gestão Contábil Eficiente", 
    text: "Acompanhamento completo das suas obrigações, garantindo transparência, organização e segurança em cada etapa do processo fiscal." 
  },
  { 
    title: "Tranquilidade para Crescer", 
    text: "Com uma contabilidade clara e acessível, você foca no que realmente importa: expandir seu negócio com confiança e segurança." 
  }
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
            <a href="#cards_especialidades">Especialidades</a>
            <a href="#sobre">Sobre</a>
            <a href="">Contatos</a>
            <button onClick={() => window.open("https://wa.me/5521977064326?text=Olá,%20quero%20saber%20mais!", "_blank")}>
               FALE CONOSCO
            </button>
          </div>
        </div>

        <div id='corpo'>
          <div id='infos'>
            <div id = "card_infos_principal">
                <div id = "hero-text">
                    <h1>Contabilidade & RH</h1>
                    <p>
                      Temos um compromisso com o seu sucesso! 
                      Oferecemos soluções contábeis e de gestão de pessoas 
                      que ajudam sua empresa a crescer com segurança, transparência e eficiência.
                    </p>
                    <ul className="hero-list">
                      <li>✅ Contabilidade clara e acessível</li>
                      <li>✅ Gestão de folha de pagamento e benefícios</li>
                      <li>✅ Consultoria estratégica para reduzir custos</li>
                      <li>✅ Apoio completo para MEI, comércio e prestadores de serviço</li>
                    </ul>
                    <button onClick={() => window.open("https://wa.me/5521977064326?text=Olá,%20quero%20saber%20mais!", "_blank")}>
                      FALE CONOSCO
                    </button>
                </div>
                <div className="hero-carousel">
                  <Slider {...settings}>
                    <div>
                      <img src="./src/assets/foto_1.png" alt="Equipe de contabilidade" />
                    </div>
                    <div>
                      <img src="./src/assets/foto_2.png" alt="Consultoria contábil" />
                    </div>
                    <div>
                      <img src="./src/assets/foto_3.png" alt="Reunião de negócios" />
                    </div>
                  </Slider>
                </div>

            </div>
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
              <div id = "title_especialidades"><h1>Especialidades</h1></div>
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
            <div id="sobre">
              <div id="title_sobre"><h1>Sobre Nós</h1></div>
              <div id="sobre_conteudo">
                <div id="fotos_sobre">
                 <img src="./src/assets/CL_logo_cinza.jpeg" alt="Logo da empresa" />
                </div>
                <div id="subtitle_sobre">
                  <h3>
                    Somos uma empresa com mais de 10 anos de experiência no mercado, oferecendo soluções eficientes 
                    e personalizadas para nossos clientes. Contamos com uma equipe de profissionais altamente capacitados 
                    nas áreas de Recursos Humanos e Contabilidade, comprometidos em entregar serviços de qualidade, 
                    transparência e confiança. Nosso foco é apoiar empresas na gestão de pessoas e na organização financeira, 
                    contribuindo para o crescimento sustentável de seus negócios.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
