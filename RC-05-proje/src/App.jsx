// import React from 'react';

// class MyButton extends React.Component {
//   render() {
//     const { label, color } = this.props;
//     return (
//       <button style={{ backgroundColor: color }}>
//         {label}
//       </button>
//     );
//   }
// }

// MyButton.defaultProps = {
//   label: 'Click me',
//   color: 'blue'
// };

// export default MyButton;


//**************************************** */
//Bu fonksiyon, bir butonu gosteriyor ve varsayılan olarak "Click me" metni ve yeşil bir arka plan rengiyle gelir. Arrow function, props'ları alır ve bu props'lar kullanılarak bir JSX bileşeni döndürür. Bu kod daha kısa ve daha açıklayıcıdır,
import React from 'react';

const MyButton = ({ label = 'Click me', color = 'green' }) => (
  <button style={{ backgroundColor: color }}>
    {label}
  </button>
);

export default MyButton;

