import { readFileSync } from 'fs';

export default (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf-8'); 
  const data2 = readFileSync(filepath2, 'utf-8');
  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);
};
