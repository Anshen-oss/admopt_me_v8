import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div>
      <div className='search'>
        {!pets.length ?(
          <h1>No Pest found</h1>
        ): (

          pets.map(pet => (
            <Pet
              animal={pet.animal}
              name={pet.name}
              id={pet.id}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
            />
          ))
        )}

      </div>
    </div>
  )
}


export default Results;
