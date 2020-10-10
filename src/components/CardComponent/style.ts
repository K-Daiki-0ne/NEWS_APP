import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  root: {
    maxWidth: 345
  },
  image: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text : {
    fontSize: "16px",
    fontWeight: 'bold'
  }
});

export default useStyle;