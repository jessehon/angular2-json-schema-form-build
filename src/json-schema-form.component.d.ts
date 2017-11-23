import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FrameworkLibraryService } from './framework-library/framework-library.service';
import { WidgetLibraryService } from './widget-library/widget-library.service';
import { JsonSchemaFormService } from './json-schema-form.service';
export declare const JSON_SCHEMA_FORM_VALUE_ACCESSOR: any;
export declare class JsonSchemaFormComponent implements ControlValueAccessor, OnChanges, OnInit {
    private changeDetector;
    private frameworkLibrary;
    private widgetLibrary;
    jsf: JsonSchemaFormService;
    private sanitizer;
    debugOutput: any;
    formValueSubscription: any;
    formInitialized: boolean;
    objectWrap: boolean;
    formValuesInput: string;
    previousInputs: {
        schema: any;
        layout: any[];
        data: any;
        options: any;
        framework: any | string;
        widgets: any;
        form: any;
        model: any;
        JSONSchema: any;
        UISchema: any;
        formData: any;
        loadExternalAssets: boolean;
        debug: boolean;
    };
    schema: any;
    layout: any[];
    data: any;
    options: any;
    framework: any | string;
    widgets: any;
    form: any;
    model: any;
    JSONSchema: any;
    UISchema: any;
    formData: any;
    ngModel: any;
    loadExternalAssets: boolean;
    debug: boolean;
    value: any;
    onChanges: EventEmitter<any>;
    onSubmit: EventEmitter<any>;
    isValid: EventEmitter<boolean>;
    validationErrors: EventEmitter<any>;
    formSchema: EventEmitter<any>;
    formLayout: EventEmitter<any>;
    dataChange: EventEmitter<any>;
    modelChange: EventEmitter<any>;
    formDataChange: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    onChange: Function;
    onTouched: Function;
    constructor(changeDetector: ChangeDetectorRef, frameworkLibrary: FrameworkLibraryService, widgetLibrary: WidgetLibraryService, jsf: JsonSchemaFormService, sanitizer: DomSanitizer);
    readonly stylesheets: SafeResourceUrl[];
    readonly scripts: SafeResourceUrl[];
    ngOnInit(): void;
    ngOnChanges(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(isDisabled: boolean): void;
    updateForm(): void;
    setFormValues(formValues: any, resetFirst?: boolean): void;
    submitForm(): void;
    initializeForm(): void;
    private initializeOptions();
    private initializeSchema();
    private initializeData();
    private initializeLayout();
    private activateForm();
}
