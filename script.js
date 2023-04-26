import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 100,
    iterations: 1000
}

export default function () {
  http.get('http://localhost:8000/api/products');
  sleep(1);
}