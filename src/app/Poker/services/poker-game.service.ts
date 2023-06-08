import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private connection?: signalR.HubConnection;

  constructor() { }

  startConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7034/gamehub')
      .build();
  }

  joinGame(gameId: string) {
    if (this.connection?.state === signalR.HubConnectionState.Disconnected) {
      this.connection.start()
        .then(() => {
          console.log('SignalR connection started.');
          this.connection?.invoke('JoinGame', gameId)
            .catch(error => console.error('Joining game error: ', error));
        })
        .catch(error => console.error('SignalR connection error: ', error));
    } else if (this.connection?.state === signalR.HubConnectionState.Connected) {
      this.connection.invoke('JoinGame', gameId)
        .catch(error => console.error('Joining game error: ', error));
    }
  }

  vote(gameId: string, playerId: string, vote: number) {
    console.log('Vote started.');
    this.connection?.invoke('Vote', gameId, playerId, vote)
      .catch(error => console.error('Voting error: ', error));
  }

  receiveVote(callback: (player: any, vote: number) => void) {
    this.connection?.on('ReceiveVote', callback);
  }
}
