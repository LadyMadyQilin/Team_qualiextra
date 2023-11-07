
const PackageText = () => {
    return (
        <>
            <div className='Text__container'>
                <h1 className='Text__title'>Description</h1>

                <div className='Text__text'>
                    <p className='Text__paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi quaerat, autem eaque ratione rerum veritatis reprehenderit eum deserunt dolore voluptatem, facere voluptas, magnam iusto sit harum optio dolor labore!
                    </p>
                    <p className='Text__paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam eos exercitationem voluptates eius.
                    </p>
                </div>

                <div>
                    <ul>
                        <li className='Text__list'>Lorem, ipsum dolor.</li>
                        <li className='Text__list'>Lorem ipsum dolor sit amet.</li>
                        <li className='Text__list'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    </ul>
                </div>

                <button className='Text__button' type="button">Plus d'informations</button>
            </div>
        </>
    )
}

export default PackageText;