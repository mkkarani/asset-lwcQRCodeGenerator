import { LightningElement, track } from 'lwc';
import qrcode from './qrcode.js';

export default class LwcQRCodeGenerator extends LightningElement {
   @track qrCodeString;
    handleInputChange(event){
        if(event.target.name == 'qrCodeString'){
            this.qrCodeString = event.target.value;
            let element = this.template.querySelector(".qrcode2");
            element.innerHTML = "";
        }
    }
    handleClick() {
        const qrCodeGenerated = new qrcode(0, 'H');
        qrCodeGenerated.addData(this.qrCodeString);
        qrCodeGenerated.make();
        let element = this.template.querySelector(".qrcode2");
        element.innerHTML = qrCodeGenerated.createSvgTag({});
   }
}