import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { currentDay, daysOfWeek } from './components/daysOfWeek';
import SubjectPost from './components/subjectPost';

const Home = () => {
  return (
    <>
      <main className="flex flex-col pt-2 pb-20 justify-start items-center h-screen max-w-screen overflow-auto">
        <section className="flex my-2 w-full ">
          <nav className="flex overflow-auto">
            <ul className="flex ">
              <li className="flex px-2 w-[calc(100vw-18px)]">
                <img
                  src="/images/painel-infos.jpg"
                  alt="Painel de informação"
                  className=" rounded-2xl "
                />
              </li>
              <li className=" flex px-2 w-[calc(100vw-18px)]">
                <img
                  src="/images/painel-infos.jpg"
                  alt="Painel de informação"
                  className=" rounded-2xl"
                />
              </li>
            </ul>
          </nav>
        </section>
        <section className="my-2 w-[100vw]">
          <nav className="flex flex-col ">
            <ul className="flex flex-row h-1/2 ">
              <li className="flex flex-col justify-center w-1/4 mx-2">
                <div className=" flex justify-center  bg-verde-insted-icon rounded-2xl">
                  <img src="./images\clock.png" className=" max-h-[4vh] my-1" />
                </div>
                <div className=" text-center h-1/2">
                  <h3 className=" text-sm font-semibold ">Horário</h3>
                </div>
              </li>
              <li className="flex flex-col justify-center w-1/4 mx-2 ">
                <div className=" flex justify-center bg-verde-insted-icon rounded-2xl">
                  <img src="./images\grade.png" className=" max-h-[4vh] my-1" />
                </div>
                <div className="text-center">
                  <h3 className=" text-sm font-semibold ">Notas</h3>
                </div>
              </li>
              <li className="flex flex-col justify-center w-1/4 mx-2">
                <div className=" flex justify-center bg-verde-insted-icon rounded-2xl">
                  <img src="./images\calendar.png" className="max-h-[4vh] my-1" />
                </div>
                <div className="text-center">
                  <h3 className=" text-sm font-semibold ">Calendário</h3>
                </div>
              </li>
              <li className="flex flex-col justify-center w-1/4 mx-2">
                <div className=" flex justify-center bg-verde-insted-icon rounded-2xl">
                  <img src="./images\notification.png" className="max-h-[4vh] my-1" />
                </div>
                <div className="text-center">
                  <h3 className=" text-sm font-semibold h-3/12">Avisos</h3>
                </div>
              </li>
            </ul>
            <ul className="flex flex-row h-1/2 ">
              <li className="flex flex-col justify-center w-1/4 mx-2">
                <div className=" flex justify-center  bg-verde-insted-icon rounded-2xl">
                  <img src="./images\clock.png" className=" max-h-[4vh] my-1" />
                </div>
                <div className=" text-center h-1/2">
                  <h3 className=" text-sm font-semibold ">Horário</h3>
                </div>
              </li>
              <li className="flex flex-col justify-center w-1/4 mx-2 ">
                <div className=" flex justify-center bg-verde-insted-icon rounded-2xl">
                  <img src="./images\grade.png" className=" max-h-[4vh] my-1" />
                </div>
                <div className="text-center">
                  <h3 className=" text-sm font-semibold ">Notas</h3>
                </div>
              </li>
              <li className="flex flex-col justify-center w-1/4 mx-2">
                <div className=" flex justify-center bg-verde-insted-icon rounded-2xl">
                  <img src="./images\calendar.png" className="max-h-[4vh] my-1" />
                </div>
                <div className="text-center">
                  <h3 className=" text-sm font-semibold ">Calendário</h3>
                </div>
              </li>
              <li className="flex flex-col justify-center w-1/4 mx-2">
                <div className=" flex justify-center bg-verde-insted-icon rounded-2xl">
                  <img src="./images\notification.png" className="max-h-[4vh] my-1" />
                </div>
                <div className="text-center">
                  <h3 className=" text-sm font-semibold h-3/12">Avisos</h3>
                </div>
              </li>
            </ul>
          </nav>
        </section>

        <section className="bg-verde-insted flex flex-col w-[calc(100vw-18px)] rounded-2xl m-2">
          <div className="ml-4 my-1">
            <h1 className="text-2xl text-white font-bold">Matérias</h1>
          </div>
          <nav className="flex mb-3 overflow-auto">
            <ul className="flex ml-2">
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3 text-verde-texto">Programação Orientada à objetos</p>
              </li>
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3 text-verde-texto">Redes de computadores</p>
              </li>
              <li className="flex flex-row text-center items-center mx-2 m-1 rounded-2xl  bg-white w-[calc(100vw-75px)]">
                <div className="h-full w-2/6 flex flex-col justify-center items-center">
                  <img src="./images\education.png " alt="..." className="w-16 my-1" />
                </div>
                <p className="w-2/3">Projeto Integrador II</p>
              </li>
            </ul>
          </nav>
        </section>
        <div className="bg-verde-insted-icon w-[calc(100vw-18px)] my-2 h-auto flex flex-col rounded-2xl">
          <div className="ml-4 my-1">
            <h1 className="text-2xl font-semibold">Atividades</h1>
          </div>
          <section className="overflow-auto">
            <nav className="flex mb-3 overflow-auto">
              <ul className=" flex ml-2 ">
                <li className="bg-white rounded-2xl flex flex-col mx-2 m-1 h-fit w-[calc(100vw-75px)]">
                  <div className="bg-verde-insted flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
                    <h4 className="font-bold text-white">Quinta-Feira, 18/08</h4>
                    <p className="font-bold text-white">23:59</p>
                  </div>
                  <div className="flex flex-row justify-center items-center p-2 ">
                    <div className="text-center">
                      <h4 className="font-bold text-verde-texto">Exercício de compreensão</h4>
                      <p className=" text-verde-texto">Programação Orientada à objetos</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-2xl flex flex-col mx-2 m-1 h-fit w-[calc(100vw-75px)]">
                  <div className="bg-verde-insted flex rounded-2xl  flex-row justify-between  py-2 px-5 ">
                    <h4 className="font-bold text-white">Quinta-Feira, 18/08</h4>
                    <p className="font-bold text-white">23:59</p>
                  </div>
                  <div className="flex flex-row justify-center items-center p-2 ">
                    <div className="text-center">
                      <h4 className="font-bold text-verde-texto">Exercício de compreensão</h4>
                      <p className=" text-verde-texto">Programação Orientada à objetos</p>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
