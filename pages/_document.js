import Document, { Html, Head, Main, NextScript } from 'next/document'
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
 
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })
 
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
 
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8"/>

            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/> 
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
            <meta name="author" content=""/>
            <title>3333333Home -Knowledge</title>

            <link rel="icon" type="image/x-icon" href="images//favicon.ico"/>

            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images//apple-touch-icon-114x114-precomposed.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images//apple-touch-icon-72x72-precomposed.png"/>
            <link rel="apple-touch-icon-precomposed" href="images//apple-touch-icon-57x57-precomposed.png"/>

            <link rel="stylesheet" type="text/css" href="libraries/lib.css"/>
            <link rel="stylesheet" type="text/css" href="libraries/Stroke-Gap-Icon/stroke-gap-icon.css"/>

            <link href='https://fonts.googleapis.com/css?family=Roboto:400,900,300,300italic,500,700' rel='stylesheet' type='text/css'/>	
            <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'/>
            <link href='https://fonts.googleapis.com/css?family=Niconne' rel='stylesheet' type='text/css'/>


            <link rel="stylesheet" type="text/css" href="css/plugins.css"/>
            <link rel="stylesheet" type="text/css" href="css/navigation-menu.css"/>

            <link rel="stylesheet" type="text/css" href="style.css"/>
            
                <link rel="stylesheet" href="/mycss/style.css"></link>
        
            <link rel="stylesheet" type="text/css" href="css/shortcode.css"/>
        </Head>
        
        <body>
          <Main />
          <NextScript />

            <script src="js/jquery.min.js"></script>
            <script src="js/jquery.knob.js"></script>
            <script src="libraries/lib.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
            <script src="js/functions.js"></script>          
        </body>
      </Html>
    )
  }
}
 
export default MyDocument