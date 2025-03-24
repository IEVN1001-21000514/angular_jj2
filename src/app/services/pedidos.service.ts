import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Sliders {
  id: number;
  value: string;
}

interface RegistroPedido {
  id_registroPedido?: number;
  id_slider: number;
  cantidad: number;
  secuencia: number;
}
interface Pedido {
  id_pedido?: number; 
  id_registroPedido: number;
  fecha_registro: string;
  numero_pedido: number;  
}

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  obtenerSliders(): Observable<Sliders[]> {
    return this.http.get<Sliders[]>(`${this.apiUrl}/obtenerSliders`);
  }

  guardarRegistroPedido(pedido: RegistroPedido): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardarRegistroPedido`, pedido);
  }

  actualizarRegistroPedido(pedido: RegistroPedido): Observable<any> {
    return this.http.put(`${this.apiUrl}/actualizarRegistroPedido`, pedido);  
  }

  eliminarRegistroPedido(id_registroPedido: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarRegistroPedido/${id_registroPedido}`);
  }

  obtener_pedido(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/obtenerPedidos`);
  }

  terminarPedido(): Observable<any> {
    return this.http.post(`${this.apiUrl}/crearPedido`, {});
  }

  // Este método obtiene los registros de un pedido por numero_pedido
  obtener_registros_por_numero_pedido(numero_pedido: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/obtenerRegistrosPorNumeroPedido/${numero_pedido}`);
  }
  

}