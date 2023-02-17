import React, { Component } from 'react'
import Portal from "./Portal"

const styles = {
    wrapper :{
        position: "absolute",
        top:0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    window : {
        position: "relative",
        borderRadius: 5,
        zIndex: 999,
        minWidth: 320,
    },
    closeBtn:{
        position: "absolute",
        top: 0,
        right: 0,
    },
    background:{
        position: "absolute",
        width: "100%",
        height:"100%",

        background: "#000",
        opacity: 0.4,
    }

}


export default class modal extends Component {
  render() {
    
    const { children, toggle, active} = this.props;
    
    return (
      <Portal>
        {active &&(
            <div style={styles.wrapper}>
                <div style={styles.window}>
                    <button style={styles.closeBtn} onClick={toggle}>x</button>
                    <div>{children}</div>
                </div>
                <div onClick={toggle} style = {styles.background}> </div>
            </div>
        )}


      </Portal>
    )
  }
}
