import PropTypes from 'prop-types'
const newMessage = {
  message: 'Hola mundo',
  name: 'Antonio'
};
const getName = () =>{
  return newMessage.name;
}
export default function FirstApp({title, subTitle, name}){
  //console.log(title)
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}
FirstApp.defaultProps = {
  name: 'Antonio Cano',
  subTitle: 'Viva yo',
  //title: 'No hay titulo'
}