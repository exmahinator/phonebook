import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../redux/contacts/contactsSlice';
import { ContactFilter } from '../ui';
import { selectContactsFilter } from '../redux/contacts/contactsSelectors';
import { AuthLabel, AuthInput } from '../ui';

const FilterContacts = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  return (
    <>
      <ContactFilter>
        <AuthLabel htmlFor="search">Whom do we need to find today?</AuthLabel>
        <AuthInput
          id="search"
          type="text"
          value={filter}
          onChange={event => dispatch(filterContacts(event.target.value))}
          placeholder="What is the name of my friend..."
        />
      </ContactFilter>
    </>
  );
};

export default FilterContacts;
