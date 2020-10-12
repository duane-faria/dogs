import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Error from '../helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head';

export default function UserPhotoPost() {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);
    const token = localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: target && URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
        <Head
        title='Postar foto'
      />
      <form onSubmit={handleSubmit}>
        <Input name='name' label='Nome' {...name} type='text' />
        <Input name='weight' label='Peso' {...weight} type='text' />
        <Input name='age' label='Idade' {...age} type='text' />
        <input
          type='file'
          className={styles.file}
          name='img'
          id='img'
          onChange={handleImgChange}
        />
        <Button disabled={loading}>
          {loading ? 'Carregando...' : 'Enviar'}
        </Button>
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
}
