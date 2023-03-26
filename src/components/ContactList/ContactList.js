import { List,Button, ListItem} from './ContactList.Styled';
export function ContactList({ contacts, onDelete }) {
    return (<List>
        {contacts.map(
            ({ id, name, number }) => {
                return (
                    <ListItem key={id} id={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <Button type="button" onClick={() => onDelete(id)}>
                            Delete
                        </Button>
                    </ListItem>
                );
            }
        )}
        </List>)
}
