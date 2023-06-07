import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Head from "../../components/Head";
import PayOrder from "../../components/OrderCloseAction/PayOrder";
import OrderHeader from "../../components/OrderHeader";
import { Container, Form, Inner } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IMaskInput } from "react-imask";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Nome e sobrenome é um campo obrigatório.")
      .min(10, "Nome e sobrenome muito curto."),
    email: yup.string().email().required("E-mail é um campo obrigatório."),
    mobile: yup.string().required("Celular é um campo obrigatório."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Payment: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <Container>
      <Head title="Pagamento" />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className="field">
            <label htmlFor="fullName">Nome e sobrenome</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="fullName"
                  autoComplete="name"
                  {...field}
                />
              )}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>
          <div className="grouped">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    {...field}
                  />
                )}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="field">
              <label htmlFor="mobile">Celular</label>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type="tel"
                    id="mobile"
                    autoComplete="phone"
                    mask={"(00) 90000-0000"}
                    {...field}
                  />
                )}
              />
              {errors.mobile && (
                <p className="error">{errors.mobile.message}</p>
              )}
            </div>
            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <input type="text" id="document" name="document" />
            </div>
          </div>
          <h4>Endereço de entrega</h4>

          <div className="field">
            <label htmlFor="zipcode">CEP</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              autoComplete="postal-code"
              style={{ width: "120px" }}
            />
          </div>
          <div className="field">
            <label htmlFor="street">Endereço</label>
            <input type="text" id="street" name="street" />
          </div>
          <div className="grouped">
            <div className="field">
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" />
            </div>
            <div className="field">
              <label htmlFor="complement">Complemento</label>
              <input type="text" id="complement" name="complement" />
            </div>
          </div>
          <div className="grouped">
            <div className="field">
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" id="neighborhood" name="neighborhood" />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="field">
              <label htmlFor="state">Estado</label>
              <select id="state" name="state">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </div>

          <h4>Pagamento</h4>
          <div className="field">
            <label htmlFor="credit-card-number">Número do cartão</label>
            <input
              type="text"
              id="credit-card-number"
              name="credit-card-number"
              autoComplete="cc-number"
            />
          </div>
          <div className="field">
            <label htmlFor="credit-card-holder-name">
              Nome impresso no cartão
            </label>
            <input
              type="text"
              id="credit-card-holder-name"
              name="credit-card-holder-name"
              autoComplete="cc-number"
            />
          </div>
          <div className="grouped">
            <div className="field">
              <label htmlFor="credit-card-expiration">Validade (MM/AA)</label>
              <input
                type="text"
                id="credit-card-expiration"
                name="credit-card-expiration"
                autoComplete="cc-exp"
              />
            </div>
            <div className="field">
              <label htmlFor="credit-card-code">Código de segurança (CW)</label>
              <input
                type="text"
                id="credit-card-code"
                name="credit-card-code"
                autoComplete="cc-csc"
              />
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  );
};

export default Payment;
