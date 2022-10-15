import {useForm,Controller} from 'react-hook-form';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {
  //Definir los datos del formulario que vamos a controlar
  const {control, handleSubmit, formState:{errors}}=useForm({
    defaultValues:{
      fullname:'',
      email:'',
      password:'',
      salary:''

    }
  })
  //metodo para mostrar los datos cuando sean validos 
  const onSubmit = data=>console.log(data);
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength:30,
          minLength:3
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.fullname?.type == "required"||errors.fullname?.type == "maxLength"
          ||errors.fullname?.type == "minLength"||errors.fullname?.type == "pattern"?'red':'green'}]}
          placeholder="nombre completo"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          
          />
        )}
        name='fullname'
      />
      {errors.fullname?.type=='required'&&<Text style={{color:'red'}}> El nombre es obligatorio</Text>}
      {errors.fullname?.type=='maxLength'&&<Text style={{color:'red'}}> El nombre debe tener almenos 30 chars</Text>}
      {errors.fullname?.type=='minLength'&&<Text style={{color:'red'}}> El nombre debe tener minimo 3 chars</Text>}
      {errors.fullname?.type=='pattern'&&<Text style={{color:'red'}}> El nombre debe tener letras y espacios</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
          maxLength:30,
          minLength:3
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.email?.type == "required"||errors.email?.type == "maxLength"
          ||errors.email?.type == "minLength"||errors.email?.type == "pattern"?'red':'green'}]}
          placeholder="correo electronico"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          
          />
        )}
        name='email'
      />
      {errors.email?.type=='required'&&<Text style={{color:'red'}}> El email es obligatorio</Text>}
      {errors.email?.type=='maxLength'&&<Text style={{color:'red'}}> El email debe tener almenos 30 chars</Text>}
      {errors.email?.type=='minLength'&&<Text style={{color:'red'}}> El email debe tener minimo 3 chars</Text>}
      {errors.email?.type=='pattern'&&<Text style={{color:'red'}}> El email debe conter @dominio.com</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
          maxLength:30,
          minLength:8
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.password?.type == "required"||errors.password?.type == "maxLength"
          ||errors.password?.type == "minLength"||errors.password?.type == "pattern"?'red':'green'}]}
          placeholder="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          secureTextEntry={true}
          
          />
        )}
        name='password'
      />
      {errors.password?.type=='required'&&<Text style={{color:'red'}}> El password es obligatorio</Text>}
      {errors.password?.type=='maxLength'&&<Text style={{color:'red'}}> El password debe tener almenos 30 chars</Text>}
      {errors.password?.type=='minLength'&&<Text style={{color:'red'}}> El password debe tener minimo 8 chars</Text>}
      {errors.password?.type=='pattern'&&<Text style={{color:'red'}}> El password debe conter</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,8}(,\d{3})*(\.\d+)?$/,
          maxLength:30,
          minLength:7
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.salary?.type == "required"||errors.salary?.type == "maxLength"
          ||errors.salary?.type == "minLength"||errors.salary?.type == "pattern"?'red':'green'}]}
          placeholder="salary"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          
          />
        )}
        name='salary'
      />
      {errors.salary?.type=='required'&&<Text style={{color:'red'}}> El salary es obligatorio</Text>}
      {errors.salary?.type=='maxLength'&&<Text style={{color:'red'}}> El salary debe tener almenos 30 chars</Text>}
      {errors.salary?.type=='minLength'&&<Text style={{color:'red'}}> El salary debe tener minimo 3 chars</Text>}
      {errors.salary?.type=='pattern'&&<Text style={{color:'red'}}> El salary debe conter solo numeros</Text>}

      
      
      <TouchableOpacity
      style={{backgroundColor:'green',borderRadius:10,padding:5,width:200}}
      onPress={handleSubmit(onSubmit)}
      >
        <Text style={{color:'white',textAlign:'center'}}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    padding:10,
    borderRadius:10,
    color:'black',
    marginBottom:5,
    borderWidth:1,
    borderColor:'green'

  }
});
