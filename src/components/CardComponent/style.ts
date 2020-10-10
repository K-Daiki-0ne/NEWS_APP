import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  root: {
    maxWidth: 345
  },
  image: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
});

export default useStyle;