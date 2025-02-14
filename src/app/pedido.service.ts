import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:5000/pedidos';  // URL del backend Flask
  private slidersUrl = 'http://localhost:5000/sliders'; // URL para obtener los sliders

  constructor(private http: HttpClient) { }

  // Método para obtener todos los pedidos
  getPedidos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para obtener todos los sliders
  getSliders(): Observable<any> {
    return this.http.get<any>(this.slidersUrl);
  }

  // Método para agregar un pedido
  addPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedido);
  }
}
