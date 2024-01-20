interface HelperText {
  description: string;
  visible: boolean;
  notLeft?: boolean;
}

const HelperText: React.FC<HelperText> = ({notLeft, description, visible}) => {
  var leftSet = 50
  
  if(notLeft) {
     leftSet = 0
  }
 
  return visible? (
    <div style={{left: leftSet, fontSize: 12, color: '#c75155', marginBottom: 25}}>{description}</div>
  ) : null
}

export default HelperText;