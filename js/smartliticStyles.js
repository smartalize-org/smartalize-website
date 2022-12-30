const CssClass = () => {
  return `.feedback-sec { top: 35%; right: 40px; position: fixed; z-index: 9999; padding: 10px; border-radius: 4px; box-shadow: 0px 16px 24px rgb(0 0 0 / 6%), 0px 2px 6px rgb(0 0 0 / 4%), 0px 0px 1px rgb(0 0 0 / 4%); background: #fff; color: #000; direction: ltr; display: flex; flex-direction: column; align-items: center; font-family: sans-serif;}.toggle-btn { transition:all 150ms; display:flex;align-items:center;flex-direction: row-reverse;color: #fff;top: 40%; right: -50px; position: fixed; z-index: 9999; padding: 10px; border: none; cursor: pointer; border-radius: 5px 5px 0px 0px; background: #21CF8E; transform: rotate(270deg)}.selection-btn { display:none;-webkit-animation: fadeIn 1s;animation: fadeIn 1s;background:transparent; text-align: center;position:relative; margin-top: 8px; border: none; cursor: pointer; border-radius: 4px;}.close-selection-btn { position: absolute; left: 5px; top: -21px; color:#fff; padding:0 5px; border: none; cursor: pointer; border-radius: 5px 5px 0 0; background: #21CF8E;}.comment-sec { display:none;-webkit-animation: fadeIn 1s;animation: fadeIn 1s;width: 100%;height:60px; color: #000; margin: 8px auto; padding: 4px; resize: vertical; max-height:240px}.emoji-btn{background:transparent;border:none;height: 40px;float: left;background-size: 40px 40px;margin: 10px 2px;cursor: pointer;transition:all 200ms ease}.emoji-btn:hover{opacity: 0.7;}.emoji-btn svg{width: 100%;}.emoji-sec{display:flex;align-items:center}.submit-btn {-webkit-animation: fadeIn 1s;animation: fadeIn 1s;display:none;background-color: #3ecf8e;position: relative;z-index: 1;box-shadow: 0px 8px 9px 0px rgb(96 94 94 / 17%);width: 160px;font-size: 14px;letter-spacing: 1px;font-weight: 500;color: #fff;border: none;text-transform: uppercase;padding: 6px 4px; border-radius:4px;font-family: 'Rubik', sans-serif; cursor:pointer;transition:all 200ms;}.submit-btn:hover {transform:translateY(2px)}.toggle-btn:hover{right:-47px}.feedback-icon{transform: rotate(90deg);width: 20px;padding-top: 10px;}.showSec{display: block}.active-rate{ border-top: 2px solid #21CF8E;}.text{transition:all 150ms;text-align:center;padding:4px 8px; color:black;}.change-target-sec{position:absolute;font-size: 10px;bottom:-22px;padding: 5px;right:0px;border-radius: 0px 0px 4px 4px;background:#21CF8E;color:#fff;cursor: pointer;}.remove-target-sec{position:absolute;font-size: 12px;background:#21CF8E;color:#fff;right:0px;top:-23px; border-radius: 4px 4px 0 0;padding: 5px; cursor: pointer;}.error{color:red}.success{color:green}.inner-text{position:absolute;top:10px;left:0;right:0}.loader {border: 2px solid #f3f3f3;border-radius: 50%;border-top: 2px solid #21CF8E;width: 20px;height: 20px;
  -webkit-animation: spin 2s linear infinite;animation: spin 2s linear infinite;}

  @keyframes fadeIn {from { opacity: 0; } to { opacity: 1; }}

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
}

export default CssClass;