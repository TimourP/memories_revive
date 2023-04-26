

def check_dict_values_type(d: dict, types: list, can_by_none: any = None) -> tuple:
    """
    Check if the values of a dictionary match the corresponding types in a list.
    
    :param d: dictionary to check
    :param types: list of types in the same order as the keys in the dictionary
    :return: tuple of (bool, str) indicating if there is no error and an error message if there is one
    """
    for i, (key, val) in enumerate(d.items()):
        if val is None:
            if can_by_none is not None and can_by_none[i]:
                continue
            return (False, f"Missing field '{key}'")
        elif not isinstance(val, types[i]):
            return (False, f"The type of the field '{key}' should be {types[i].__name__}")
    return (True, "")