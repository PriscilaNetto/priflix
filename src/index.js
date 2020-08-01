import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Giphy from './assets/img/Giphy.gif';

import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Erro404 = () => (
  <img className="errorMessage" src={Giphy} alt="Página não encontrada " />
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
