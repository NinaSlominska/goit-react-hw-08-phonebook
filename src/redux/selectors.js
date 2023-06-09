export const getContacts = state => state.contacts.contacts;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state).toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
