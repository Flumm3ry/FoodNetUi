import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme(
  /**
   * @see https://material-ui.com/customization/themes/#theme-configuration-variables
   */
  {
    typography: {
      fontFamily: 'Lato',
    },
    palette: {
      contrastThreshold: 2,
      primary: {
        main: '#eeeee4',
      },
      secondary: {
        main: '#eeeee4',
      },
    },

    /**
     * @see https://material-ui.com/customization/globals/#default-props
     */
    overrides: {
      MuiCssBaseline:{
        '@global': {
          body: {
            backgroundImage: 'background.png'
          }
        }
      },
      MuiOutlinedInput: {
        input: {
          padding: '10px 14px',
        },
        root: {
          backgroundColor: '#eeeee4',
          borderRadius: 25
        }
      },
    },
  }
)
