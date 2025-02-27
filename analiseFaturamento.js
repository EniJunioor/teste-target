const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));


const diasUteis = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

const menorFaturamento = Math.min(...diasUteis);
const maiorFaturamento = Math.max(...diasUteis);
const mediaMensal = diasUteis.reduce((acc, val) => acc + val, 0) / diasUteis.length;
const diasAcimaMedia = diasUteis.filter(valor => valor > mediaMensal).length;


console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
