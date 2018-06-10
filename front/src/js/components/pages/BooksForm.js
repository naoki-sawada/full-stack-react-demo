import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import { connect } from 'react-redux';
import { postBook } from '~/modules/books';

@connect(state => ({
}), {
  postBook,
})
export default class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      images: "",
      price: 0,
    };
    this.submitButton = this.submitButton.bind(this);
    this.onDOMChange = this.onDOMChange.bind(this);
  }

  submitButton() {

  }

  onDOMChange(arg) {
    console.log(arg)
  }

  render() {
    return (
      <Form pad="none">
        <FormField label='Title'>
          <TextInput
            id="title"
            // value={this.state.title}
            // onDOMChange={this.onDOMChange}
          />
        </FormField>
        <FormField label='Description'>
          <TextInput />
        </FormField>
        <FormField label='Images'>
          <TextInput />
        </FormField>
        <FormField label='Price'>
          <TextInput />
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Add'
            primary={true}
            onClick={this.submitButton} />
        </Footer>
      </Form>
    );
  }
}
