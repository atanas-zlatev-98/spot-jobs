import { Form } from 'react-bootstrap';

const Filters: React.FC = () => {

    return (
        <Form>
            <Form.Group className='filters-scss p-5 mb-3'>


                <Form.Group className='mb-3'>
                    <Form.Label>Заплата</Form.Label>
                    <Form.Select aria-label="Default select example">

                        <option>Всички</option>
                        <option value="1">С обявена заплата</option>
                        <option value="2">под 500 лв.</option>
                        <option value="3">от 500 до 1000 лв.</option>
                        <option value="3">от 1000 до 1500 лв.</option>
                        <option value="3">от 1500 до 2000 лв.</option>
                        <option value="3">от 2000 до 3000 лв.</option>
                        <option value="3">от 3000 до 5000 лв.</option>
                        <option value="3">над 5000 лв.</option>

                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Търсене по Категория</Form.Label>
                    <Form.Control type="search" placeholder="Търсене" />

                </Form.Group>



                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check

                            id={`default-${type}`}
                            label='Телекомуникация'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Разработка на Софтуер'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Маркетинг'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Стройтелство'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Финанси'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Промишленост'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Дизайн'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Поддръжка'
                        />
                    </div>
                ))}
            </Form.Group>

            <Form.Group className='filters-scss p-5 mb-3'>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Търсене по Локация</Form.Label>
                    <Form.Control type="search" placeholder="Търсене" />
                </Form.Group>

                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check

                            id={`default-${type}`}
                            label='Пловдив'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='София'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Пазарджик'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Варна'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Бургас'
                        />
                    </div>
                ))}
            </Form.Group>

            <Form.Group className='filters-scss p-5 mb-3'>

                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='filters-jobs'>Търсене по Работно време</Form.Label>

                </Form.Group>

                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check

                            id={`default-${type}`}
                            label='Половин Работен Ден'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Пълен Работен Ден'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Стажове'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Временни'
                        />
                        <Form.Check

                            id={`default-${type}`}
                            label='Свободна Практика'
                        />
                    </div>
                ))}
            </Form.Group>
        </Form>
    )
}
export default Filters