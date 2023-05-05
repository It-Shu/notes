import React, {FC, useCallback, useEffect, useState} from 'react';
import * as C from './Test.style';

interface ContentType {
    onModalClose: () => void
    isModalActive: boolean
    onConfirm: () => void
}

const Content: FC<ContentType> = (props) => {

    const {onModalClose, isModalActive, onConfirm} = props

    const [timer, setTimer] = useState(5)

    useEffect(() => {
        if (timer > 0 && isModalActive) {
            const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [timer, isModalActive]);

    const didModalClose = () => {
        onModalClose()
        setTimer(5)
        console.log('закрыть')
    }
    const disableButton = () => timer > 0

    const handleConfirm = useCallback(() => {
        onConfirm();
        onModalClose();
    }, [onConfirm, onModalClose]);

    return (
        <>
            <C.ContentCloseButtonContainer>
                <C.ContentButton onClick={didModalClose}>X</C.ContentButton>
            </C.ContentCloseButtonContainer>

            <C.ContentTitle>Согласие с правилами</C.ContentTitle>
            <C.ContentText>Для данной функции применяются особые условия и
                правила пользования, их необходимо подтвердить, нажав на
                кнопку Подтвердить</C.ContentText>
            <C.ContentButtonContainer>
                <C.ContentButton onClick={didModalClose}>Отмена</C.ContentButton>
                <C.ContentButton
                    disabled={disableButton()}
                    onClick={handleConfirm}>Подтвердить {timer === 0 ? '' : timer}
                </C.ContentButton>
            </C.ContentButtonContainer>

        </>

    )
}

export default Content

// type IProps = {
//     onModalClose: () => void
//     isOpen: boolean
//     title: string
//     children?: React.ReactNode;
// }
//
// export const Modal2: React.FC<IProps> = props => {
//     const didModalClosed = useCallback(() => props.onModalClose(), []);
//     const stopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();
//
//     return (<>
//         {props.isOpen &&
//         <div onClick={didModalClosed}>
//             <div>
//                 <h3>{props.title}</h3>
//                 <button onClick={didModalClosed}>Close</button>
//             </div>
//             <div onClick={stopPropagation}>
//                 {props.children || null}
//             </div>
//         </div>
//         }
//     </>);
// };

// import Offer from './Offer.tsx'
// import AccountSelector from './AccountSelector.tsx'
// import Button from './Button.tsx'
//
// interface Account {
//     accountId: number
//     accountName: string
// }
//
// type ViewType = {
//     onAccountChanged: (account: Account) => void
//     accounts: Account[]
//     conditions: string
//     offer: string
//     onSubmit: (id: number | null) => void
// }
//
// const View: FC<ViewType> = ({
//                                 onAccountChanged,
//                                 accounts,
//                                 conditions,
//                                 offer,
//                                 onSubmit,
//                             }) => {
//
//
//     const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null)
//
//     const didAccountChanged = (account: Account) => {
//         onAccountChanged(account);
//         setSelectedAccountId(account.accountId)
//     }
//
//     const handleSubmit = () => {
//         onSubmit(selectedAccountId);
//     }
//     const shouldRenderAccountSelector = accounts && (accounts.length > 1 || !selectedAccountId)
//
//     if (!accounts) {
//         return <div>Ошибка: аккаунты не найдены</div>;
//     }
//
//     return (
//         <>
//             <Offer conditions={conditions} offer={offer}/>
//
//             <div>
//                 {shouldRenderAccountSelector && (
//                     <div>
//                         <h2>Счет для получения перевода</h2>
//                         <AccountSelector
//                             accounts={accounts}
//                             selectedAccountId={selectedAccountId}
//                             onChange={didAccountChanged}
//                         />
//                     </div>
//                 )}
//             </div>
//
//             <div>
//                 <Button text="Подтверждаю, что согласен с правилами платформы"
//                         onClick={handleSubmit}/>
//             </div>
//         </>
//     )
//
// };
//
// export default View;
// class View extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedAccountId: ''
//         };
//     }
//
//     didAccountChanged(account) {
//         this.props.onAccountChanged(account);
//         this.setState({
//             selectedAccountId: account.accountId
//         });
//     }
//
//     isEmpty = (id) => {
//         return id
//     }
//
//     render() {
//         if (!this.props.accounts) {
//             return;
//         }
//
//         return (
//             <>
//             <Offer conditions={this.props.conditions} offer={this.props.offer} />
//
//         <div>
//             {this.props.accounts.length > 1 || this.isEmpty(this.state.selectedAccountId) &&
//                 <div>
//                     <h2>Счет для получения перевода</h2>
//                     <div>
//                         <AccountSelector
//                             accounts={this.props.accounts}
//                             selectedAccountId={this.state.selectedAccountId}
//                             onChange={this.props.didAccountChanged}
//                         />
//                     </div>
//                 </div>
//             }
//         </div>
//
//         <div>
//             <Button text="Подтверждаю, что согласен с правилами платформы" onClick={() => this.props.onSubmit(this.state.selectedAccountId)} />
//         </div>
//             </> );
//
//     }
// }
