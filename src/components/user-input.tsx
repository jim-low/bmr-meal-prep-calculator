import { Text, TextField } from '@radix-ui/themes'

const UserInput = ({ type = "text", value, setValue, placeholder, prefix = "" }: { type?: 'date' | 'datetime-local' | 'email' | 'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week', value: string, setValue: (str: string) => void, placeholder: string, prefix?: string }) => {
    return (
        <TextField.Root
            type={type}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
        >
            <TextField.Slot side="right">
                <Text as="p" m="0">{prefix}</Text>
            </TextField.Slot>
        </TextField.Root>
    )
}

export default UserInput
