const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const {jsPDF}=require('jspdf'),PDF=require('../pdf.js');
const font=fs.readFileSync(path.join(root,'assets/NanumGothic-Regular.ttf')).toString('base64');
fs.mkdirSync(path.join(root,'downloads'),{recursive:true});
for(const mode of ['blank','teacher']){const doc=PDF.create(jsPDF,font,mode);fs.writeFileSync(path.join(root,'downloads',`pressure-quest-${mode}.pdf`),Buffer.from(doc.output('arraybuffer')));console.log(mode+': '+doc.getNumberOfPages()+' pages');}
