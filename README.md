# NeoStore

Bem-vindo ao **NeoStore**, um sistema full stack para gerenciamento de fornecedores.

## 🚀 Sobre o Projeto
NeoStore é uma aplicação desenvolvida com **Jakarta EE 10** no backend e **React** no frontend, utilizando **PostgreSQL** como banco de dados. O objetivo é facilitar o gerenciamento de fornecedores.

Aplicação criada pensando na stack usada pela Neomind. Estudei, aprendi e apliquei o uso de diversas tecnologias incomuns ao meu dia-a-dia, apesar de complicações com a configurações dos ambientes. A seguir vou apresentar as tecnologias e falar um pouco da minha escolha e desafios que tive ao usar.
A aplicação foi construida pensando na escalabilidade, usando das camadas da arquitetura limpa e principios do Domain Driven Desing, foram construidos testes para validar o funcionamento e por fim iria ser construido um docker compose para acelerar e facilitar a execução do projeto.

Por fim algumas funções não ficaram completas por que chegou ao fim do prazo.

Entre elas teve: 
   A função de importação de Fornecedores via JSON, tendo pronto so a parte do servidor;
   A validação dos campos de CNPJ e Email estão prontas, porem não consegui configuarar os Objects Values nos campos do JPA;


## 🛠️ Tecnologias Utilizadas
- **Backend:** Jakarta EE 10, TomEE, OpenJPA, Hibernate
- *Motivo:* Escolhi pensando na stack que a Neomind trabalha diariamente, alem disso, é uma stack bem robusta e confiavel para ser usada no backend, confiavel e validada pelo mercado
- *Desafio:* O maior desafio que enfrentei nessa parte foi saber configurar o TomEE, demorei um pouco para entender como funcionava o Entity Manager e com isso gastei bastante tempo até funcionar de fato, fora isso, JPA/Hibernate e o CDI são conceitos mais faceis de entender e aplicar no código.
- *Pontos a melhorar:* Estudar melhor a configuração de servidores TomEE

  
- **Frontend:** React, styled-components, React-icons e Axios
- *Motivo:* Uma Stack mais nova no mercado, mas que é forte e muito pratica para construção de um frontend escalavel e dinamico.
- *Desafio:* Não houveram muitos desafios durante o desenvolvimento, pois é uma stack que eu ja tenho certa experiência.
- *Pontos a melhorar:* Entender melhorar como organizar os arquivos, nesse projeto também achei valido ter adicionado Tailwind ou Bootstrap, para diminuir a quantidade de classes css

  
- **Banco de Dados:** PostgreSQL  
- *Motivo:* Um banco de dados que não tenho experiencia, e resolvi adicionar para me desafiar a aprender também
- *Desafio* Entender as diferenças do seu uso, mas não gerou nenhum tipo de complicação no caminho
- *Pontos a melhorar:* Estudar as melhores praticas para esse SGBD

  
- **Servidor de Aplicação:** Apache TomEE
- *Motivo:* Durante a entrevista, ouvi que esse era o servidor que a Neomind mais utiliza para as aplicações, então resolvi usa-lo por esse motivo
- *Desafio:* A configuração para utilização do JPA e o CDI foram meu maior desafio durante o periodo de desenvolvimento, sendo que por fim ainda tenho algumas duvidas sobre o funcionamento correto da aplicação usando o TomEE
- *Ponto a Melhorar:* Estudar mais a fundo sobre como configurar e utilizar o TomEE, pois é um assunto bem extenso e que leva tempo até dominar e entender 100%.

## 📌 Instalação e Configuração
### **1. Pré-requisitos**
Antes de instalar o projeto, certifique-se de ter os seguintes softwares instalados:
- **Java 17+**
- **Apache TomEE 10+**
- **PostgreSQL 14+**
- **Node.js 18+ e npm** (para o frontend)

### **2. Configuração do Banco de Dados**
1. Crie o banco de dados:
   ```sql
   CREATE DATABASE neostore_db;
   ```
2. Ajuste as configurações de conexão no arquivo `context.xml`:
   ```xml
   <Resource name="NeostoreDatasource"
              auth="Container"
              type="javax.sql.DataSource"
              driverClassName="org.postgresql.Driver"
              url="jdbc:postgresql://localhost:5432/neostore_db"
              username="postgres"
              password="postgres" 
              maxTotal="20"
              maxIdle="10"
              maxWaitMillis="30000"/>
   ```

### **3. Rodando o Backend**
1. Compile e inicie o backend:
   ```sh
   mvn clean install
   mvn tomee:run
   ```

### **4. Rodando o Frontend**
1. Instale as dependências:
   ```sh
   cd frontend
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```


