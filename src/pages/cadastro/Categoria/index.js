import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: " ",
    descricao: "",
    cor: "",
  };


  const [categorias, setCategorias] = useState([]);
  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria 👽"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição ✏️"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor 🎨"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );

}

export default CadastroCategoria;
