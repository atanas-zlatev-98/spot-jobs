import { useGetAllJobsQuery, useDeleteJobApplicationMutation } from "../generates/graphql";
import Footer from '../components/footer/footer';
import JobsList from '../components/jobs/JobsList';
import NavBar from '../components/navbar/NavBar';
import { Container, SSRProvider } from 'react-bootstrap';
import CountUp from "react-countup";


const HomePage: React.FC = () => {

    const { isLoading, isError, data, refetch } = useGetAllJobsQuery({}, { refetchOnWindowFocus: false })
    const { mutate } = useDeleteJobApplicationMutation({
        onSuccess: () => {
            refetch()
        }
    })
    function onDelete(_id: string) {
        mutate({ id: _id })

    }
    return (
        <Container>
            <Container className="main-page">
                <Container className='something'>
                    <NavBar></NavBar>
                    <Container className='container mt-3 pt-5 d-flex justify-content-center flex-column'>

                        <h1 className='h1-main-page mt-5 mb-5'>Най-лесният начин да намерите новата си работа</h1>

                        {/*<p className='p-main-page'>Всеки месец повече от 3 милиона търсещи работа се обръщат към уебсайта в търсене на работа, като подават над 140 000 заявления всеки ден</p>*/}

                        <Container className="container">
                            <Container className="row">
                                <Container className="col-sm mb-3">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Име,Компания..." />
                                </Container>
                                <Container className="col-sm mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option >Моля Изберете Локация</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Container>
                                <Container className="col-sm mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option>Моля Изберете Сфера</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Container>
                                <Container className='col-sm'>
                                    <button type="button" className="btn btn-outline-light button-search-main">Търсене</button>
                                </Container>
                            </Container>
                        </Container>


                        <Container className='container dont-display-mobile'>
                            <Container className='col-sm'>
                                <Container className='row d-flex'>
                                    <Container className='pt-5 d-flex flex-row align-items-center p-trending'>Актуални ключови думи:
                                        <Container className='d-flex flex-row'>
                                            <a className='trending' href='#'>UI/UX Desighner</a>
                                            <a className='trending' href='#'>Java</a>
                                            <a className='trending' href='#'>React</a>
                                            <a className='trending' href='#'>Wordpress</a>
                                            <a className='trending' href='#'>Freelancer</a>
                                        </Container></Container>

                                </Container>
                            </Container>

                        </Container>
                    </Container>
                </Container>
                <p className='spacer'></p>
                <Container className='container'>
                    <Container className='row left-b'>
                        <h1 >Намерете идеалната за вас работа</h1>
                        <p >Търсете по избрана от вас категория</p>
                    </Container>

                    <Container className='row mb-3 mt-5'>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-tele'></Container>
                                <h6 className='h6-job-type'>Телекомуникация</h6>
                                <p>250 Оферти</p>
                            </Container>
                        </Container>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-dev'></Container>
                                <h6 className='h6-job-type'>Разработка на Софтуер</h6>
                                <p>Над 1000 Оферти</p>
                            </Container>
                        </Container>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-marketing'></Container>
                                <h6 className='h6-job-type'>Маркетинг</h6>
                                <p>Над 500 Обяви</p>
                            </Container>
                        </Container>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-const'></Container>
                                <h6 className='h6-job-type'>Стройтелство</h6>
                                <p>Над 1000 Обяви</p>
                            </Container>
                        </Container>
                    </Container>

                    <Container className='row mb-3'>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place'></Container>
                                <h6 className='h6-job-type'>Финанси</h6>
                                <p>Над 250 Обяви</p>
                            </Container>
                        </Container>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-prod'></Container>
                                <h6 className='h6-job-type'>Промишленост</h6>
                                <p>Над 200 Обяви</p>
                            </Container>
                        </Container>
                        <Container className='col d-flex justify-content-center'>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-design'></Container>
                                <h6 className='h6-job-type'>Дизайн</h6>
                                <p>Над 300 Обяви</p>
                            </Container>
                        </Container>
                        <Container className='col d-flex justify-content-center '>
                            <Container className='job-type d-flex align-items-center flex-column mb-3'>
                                <Container className='icon-place-cs'></Container>
                                <h6 className='h6-job-type'>Поддръжка</h6>
                                <p>250 Job offers</p>
                            </Container>
                        </Container>
                        <Container className='d-flex justify-content-center mt-5 mb-5'>
                            <button type="button" className="btn btn-primary btn-all-jobs">
                                Вижте Всички Обяви</button></Container>
                        <Container className='container d-flex flex-column'>

                            <Container>
                                {data && <JobsList jobs={data?.getAllJobs} onSelect={onselect} />}
                            </Container>





                        </Container>
                    </Container>
                </Container>

                <Container className='counters'>
                    <Container className="container">

                        <h1 className='deinosti pt-5'>Дейности</h1>

                        <p className='deinosti-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde officiis recusandae sequi excepturi corrupti.</p>

                        <Container className="row">

                            <Container className="col-sm d-flex flex-column align-items-center">

                                <Container className='d-flex align-items-center justify-content-center'>

                                    <h1 className='deinosti'>+</h1>
                                    <CountUp className='countup-style' end={1500} duration={100}></CountUp>

                                </Container>
                                <h1 className='countup-h1'>Кандидати</h1>
                            </Container>


                            <Container className="col-sm d-flex flex-column align-items-center ">
                                <Container className='d-flex align-items-center justify-content-center'>
                                    <h1 className='deinosti'>+</h1>
                                    <CountUp className='countup-style' end={10000} duration={100}></CountUp>
                                </Container>
                                <h1 className='countup-h1'>Обяви</h1>
                            </Container>

                            <Container className="col-sm d-flex flex-column align-items-center ">
                                <Container className='d-flex align-items-center justify-content-center'>
                                    <h1 className='deinosti'>+</h1>
                                    <CountUp className='countup-style' end={500} duration={100}></CountUp>
                                </Container>
                                <h1 className='countup-h1'>Намерили Работа</h1>
                            </Container>

                            <Container className="col-sm d-flex flex-column align-items-center  mb-3">

                                <Container className='d-flex align-items-center justify-content-center'>
                                    <h1 className='deinosti'>+</h1>
                                    <CountUp className='countup-style' end={700} duration={100}></CountUp>
                                </Container>
                                <h1 className='countup-h1'>Фирми</h1>
                            </Container>

                        </Container>
                    </Container>
                </Container>

                <Container className='happy-clients pb-5'>
                    <h1 className='deinosti text-black pb-5 pt-5'>Доволни Клиенти</h1>
                    <Container className="container">
                        <Container className="row">
                            <Container className="col-sm d-flex align-items-center flex-column mb-3">
                                <Container className='photo mb-2' id='face_one'></Container>
                                <p className='text-center'>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.
                                    Lorem Ipsum е индустриален стандарт от около 1500 година</p>
                                <h1>Виктор Николов</h1>
                                <h4>SharkDesign</h4>
                            </Container>

                            <Container className="col-sm d-flex align-items-center flex-column mb-3">
                                <Container className='photo mb-2' id='face_two'></Container>
                                <p className='text-center'>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.
                                    Lorem Ipsum е индустриален стандарт от около 1500 година</p>
                                <h1>Георги Димитров</h1>
                                <h4>JavaCorp</h4>
                            </Container>

                            <Container className="col-sm d-flex align-items-center flex-column mb-3">
                                <Container className='photo mb-2' id='face_three'></Container>
                                <p className='text-center'>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.
                                    Lorem Ipsum е индустриален стандарт от около 1500 година</p>
                                <h1>Пламен Георгиев</h1>
                                <h4>WebMasters</h4>
                            </Container>

                        </Container>
                    </Container>
                </Container>

                <Container className='google-maps'>
                    <h1 className='text-center mb-5'>Къде може да ни намерите?</h1>
                    <Container className="mapouter"><Container className="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=pazardjik&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net">how to add a google map to html</a></Container></Container>

                </Container>

                <Container className='footers'>
                    <Footer></Footer>
                </Container>
            </Container>



        </Container>
    )
}
export default HomePage