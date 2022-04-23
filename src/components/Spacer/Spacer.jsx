import React from 'react'

export const Spacer = ( { orientation, space } ) => {

    const get_params = () => {
        if ( orientation == "horizontal" ) {

            return {
                marginLeft: space,
                marginRight: space
            }

        }
        else if ( orientation == "vertical" ) {
            
            return {
                marginTop: space,
                marginBottom: space
            }

        }
        else {
            
            return {
                margin: space
            }

        }
    }

    return (

        <div style={ get_params() }></div>

    )

}