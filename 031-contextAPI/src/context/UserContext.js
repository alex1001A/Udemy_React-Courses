// Можно пользоваться разными конекстами в рамках одного приложения, компонентов типа "UserContext" может быть больше
import { createContext } from "react";

const UserContext = createContext()

// лучше всегда явно присвоить свойствам значения, что бы в случае сбоя ссылалось просто на пустую функцию, а не выкидывало ошибку (по идее эту проблему решает TypeScript)

// const UserContext = createContext({
//     user: '', 
//     setUser: () => {}
// })

export default UserContext