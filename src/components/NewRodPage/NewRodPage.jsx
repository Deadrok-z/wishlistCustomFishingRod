import React from 'react';
import {
    Form,
    FormItem,
    Input,
    FormGroup,
    Select,
    Option,
    Slider,
    RadioButton
} from '@ui5/webcomponents-react';
import Footer from '../footer/newRodFooter';
import { useState } from 'react';

const onChange = (event) => {
    console.log(event.detail.selectedOption.dataset.id);
};

const data = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' }
];

export default function NewRodPage() {
    const [rodName,setRodName] = useState('')
    const onEnterName = (e)=>{
        setRodName(e.target.value)
        console.log(rodName)
    }
    
    return (
        <div>
            <Form
                style={{
                    alignItems: 'center'
                }}
                titleText="New Fishing Rod"
            >
                <FormGroup titleText="Your Fishing Rod">
                    <FormItem label="Name">
                        <Input onInput={(e)=>onEnterName(e)} />
                    </FormItem>
                    <FormItem label="Price">
                        <Input />
                    </FormItem>
                    <FormItem label="Assembly Type">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Fishing rod">
                        <Select onChange={onChange}>
                            {data.map((item) => (
                                <Option key={item.id} data-id={item.id}>
                                    {item.text}
                                </Option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem label="Length">
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Slider
                            onChange={function noRefCheck() { }}
                            onInput={function noRefCheck() { }}
                        />
                    </FormItem>
                    <FormItem label="Length Knee(sm)">
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Slider
                            onChange={function noRefCheck() { }}
                            onInput={function noRefCheck() { }}
                        />
                    </FormItem>
                    <FormItem label="Fishing rod knee">
                        <Input />
                    </FormItem>
                    <FormItem label="Number of fishing rod rings">
                        <Input />
                    </FormItem>
                    <FormItem label="Lead ring inserts">
                        <RadioButton name="GroupA" text="Option A" />
                        <RadioButton name="GroupA" text="Option B" />
                        <RadioButton name="GroupA" text="Option C" />
                    </FormItem>
                    <FormItem label="Min fishing rod test(gram)">
                        <Input />
                    </FormItem>
                    <FormItem label="Max fishing rod test(gram)">
                        <Input />
                    </FormItem>
                    <FormItem label="Assembly Type">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Assembly Type">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Assembly Type">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Assembly Type">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Weight fishing rod(gram)">
                        <Input />
                    </FormItem>
                </FormGroup>
            </Form>
            <Footer />
        </div>
    );
}