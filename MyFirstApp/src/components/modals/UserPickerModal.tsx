import MyResponseModel from '../../models/ResponseModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyResponseBuilder from '../builders/ResponseBuilder';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyView from '../views/View';

const MyUserPickerModal = ({message}: {message?: string}) => (
  <MyCardModalScaffold isExpanded>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedSelectUserText()}
      messageText={message}
    />
    <MyDivider />
    <MyResponseBuilder
      response={function (): Promise<MyResponseModel> {
        throw new Error('Function not implemented.');
      }}
      builder={response => <MyView />}
    />
  </MyCardModalScaffold>
);

export default MyUserPickerModal;
