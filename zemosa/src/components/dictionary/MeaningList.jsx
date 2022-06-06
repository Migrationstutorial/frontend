

export const MeaningList = ({mean}) => {
    console.log(mean)
  return (
    <div className ='meaning-list'>
      {mean.map(val=>val.meanings.map(means=> means.definitions.map(def=>(
        <div key={def.definition}>
        <li>{def.definition}</li> 
        <hr />
        </div>

      ))))}
    </div>
  )
}
