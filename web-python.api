from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_binary():
    """
    Converts decimal, hexadecimal, text to binary and vice versa.

    Args:
        data: JSON object containing the input value and the conversion type.
            - input_type: 'decimal', 'binary', 'hexadecimal', 'text'
            - input_value: The value to be converted.
            - output_type: 'decimal', 'binary', 'hexadecimal', 'text' 

    Returns:
        JSON object containing the converted value.
    """
    data = request.get_json()

    if not data or not all(key in data for key in ('input_type', 'input_value', 'output_type')):
        return jsonify({'error': 'Missing input parameters'}), 400

    input_type = data['input_type']
    input_value = data['input_value']
    output_type = data['output_type']

    try:
        if input_type == 'decimal':
            decimal_value = int(input_value)
            if output_type == 'binary':
                return jsonify({'result': bin(decimal_value)[2:]})
            elif output_type == 'hexadecimal':
                return jsonify({'result': hex(decimal_value)[2:].upper()})
            elif output_type == 'text':
                return jsonify({'error': 'Cannot convert decimal directly to text.'}), 400
        elif input_type == 'binary':
            if not all(c in '01' for c in input_value):
                return jsonify({'error': 'Invalid binary input.'}), 400
            binary_value = int(input_value, 2)
            if output_type == 'decimal':
                return jsonify({'result': str(binary_value)})
            elif output_type == 'hexadecimal':
                return jsonify({'result': hex(binary_value)[2:].upper()})
            elif output_type == 'text':
                return jsonify({'error': 'Cannot convert binary directly to text.'}), 400
        elif input_type == 'hexadecimal':
            if not all(c in '0123456789ABCDEF' for c in input_value.upper()):
                return jsonify({'error': 'Invalid hexadecimal input.'}), 400
            hex_value = int(input_value, 16)
            if output_type == 'decimal':
                return jsonify({'result': str(hex_value)})
            elif output_type == 'binary':
                return jsonify({'result': bin(hex_value)[2:]})
            elif output_type == 'text':
                return jsonify({'error': 'Cannot convert hexadecimal directly to text.'}), 400
        elif input_type == 'text':
            if output_type == 'binary':
                binary_string = ' '.join(format(ord(c), '08b') for c in input_value)
                return jsonify({'result': binary_string})
            elif output_type == 'decimal' or output_type == 'hexadecimal':
                return jsonify({'error': 'Cannot convert text directly to decimal or hexadecimal.'}), 400
            elif output_type == 'text':
                return jsonify({'result': input_value})  # Return the input text itself
        else:
            return jsonify({'error': 'Invalid input type.'}), 400
    except ValueError:
        return jsonify({'error': 'Invalid input value.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
