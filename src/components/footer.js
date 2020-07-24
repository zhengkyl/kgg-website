import React from "react"
import { Link } from "gatsby"

import WaveBlock from "./waveBlock"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  footer:{
    position: "absolute",
    bottom: 0,
    width:"100%",
  }
}))

const Footer = () => {
  const classes = useStyles()

  
  return (
    <footer className={classes.footer}>
      
      <WaveBlock flatBottom={true}>
        <Container maxWidth="lg">
<Typography variant="caption">{`© ${new Date().getFullYear()}, Built with <3 by KGG`}</Typography>
        <div>
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>

        <a href="https://www.freepik.com/free-vector/people-jumping-youth-day-design_8648097.htm">
          People vector created by freepik - www.freepik.com
        </a>

        <a href="https://www.freepik.com/free-vector/business-woman-with-coffee-posting-photo-internet_5481388.htm">
          Business vector created by pikisuperstar - www.freepik.com
        </a>
      </div>
        </Container>
        
      </WaveBlock>
      
    </footer>
  )
}

export default Footer
