import { createGlobalStyle } from "styled-components";
const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
${normalize}

html {
  }

body {
  font-family: 'Montserrat', sans-serif;
  color:${(props) => props.theme.color.prmary};
  font-size:${(props) => props.theme.font.size.regular};
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size:${(props) => props.theme.font.size.small};
  }
}
p{
  font-weight: ${(props) => props.theme.font.weight.light};

}
/* herro slogan 1st line*/
h1,h2,h3,h4,h5,p {
  margin:0;
  padding:0;
}
h1 {
  font-size:${(props) => props.theme.font.size.extralarge};
  font-weight:${(props) => props.theme.font.weight.semiBold};
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    text-align:center;
    font-size:${(props) => props.theme.font.size.large};
  }
}
/* herro slogan 2nd line*/
h2 {
  font-size:${(props) => props.theme.font.size.regular};
  font-weight:${(props) => props.theme.font.weight.regular};
  text-transform:uppercase;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    text-align:center;
    font-size:${(props) => props.theme.font.size.small};
  }
}
/* hero elements*/
h3 {
  font-size:${(props) => props.theme.font.size.regular};
  font-weight:${(props) => props.theme.font.weight.medium};
  text-transform:uppercase;

}
/* section header*/
h4 {
  font-size:${(props) => props.theme.font.size.extraBig};
  font-weight:${(props) => props.theme.font.weight.regular};
  color:${(props) => props.theme.color.secondary};
  text-transform:uppercase;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    text-align:center;
    font-size:${(props) => props.theme.font.size.big};
  }
}

/* section subheader*/
h5 {
  font-size:${(props) => props.theme.font.size.extraBig};
  font-weight:${(props) => props.theme.font.weight.regular};
  color:${(props) => props.theme.color.secondary};
  text-transform:uppercase;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size:${(props) => props.theme.font.size.big};
  }
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}


  a {
    cursor: pointer;
    text-decoration:none;
  }
`;

export default GlobalStyles;
