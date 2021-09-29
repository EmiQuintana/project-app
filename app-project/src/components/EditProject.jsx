import React, {useState} from 'react'
import ModalEdit from './ModalEdit';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const EditProject = (props) => {

    //console.log(props.currentProject)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: props.currentProject
    });

    const onSubmit = (data, e) => {
        console.log(data)

        props.updateProject(props.currentProject.id, data)

        //limpiar campos
        e.target.reset();
    }

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container-sm">
            <div className="d-flex mb-3 mt-3">
                <Link to="/" className="mx-3 mt-2">
                    <ArrowBackIcon color='action' />
                </Link>
            <h2>Edit project</h2>
            </div>
            <div>
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-3">
                        <label className="form-label">Project Name</label>
                        <input type="text" className="form-control" name="projectName" {...register('projectName', { required: true })}></input>
                        {errors.projectName && errors.projectName.type === "required" && <span>El campo es requerido</span>}
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" {...register('description', { required: true })}></input>
                        {errors.description && errors.description.type === "required" && <span>El campo es requerido</span>}
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Project manager</label>
                        <select className="form-select" aria-label="Select a person" name="projectManager" {...register('projectManager', { required: true })}>
                            <option>Select a person</option>
                            <option value="JuanitoGomez">Juanito Gomez</option>
                            <option value="Juancito Perez">Juancito Perez</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Assigned to</label>
                        <select className="form-select" aria-label="Select a person" name="assignedTo" {...register('assignedTo', { required: true })}>
                            <option>Select a person</option>
                            <option value="Natalia Gomez">Natalia Gomez</option>
                            <option value="Pedrito Perez">Pedrito Perez</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Status</label>
                        <select className="form-select" aria-label="status" name="assignedTo" {...register('status', { required: true })}>
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div className="mt-3 d-flex align-items-end flex-column bd-highlight">
                        <button
                            type="submit"
                            className="btn btn-danger bd-highlight"
                            onClick={() => { setOpenModal(true); }}
                        >
                            Save
                        </button>
                        {openModal && <ModalEdit closeModal={setOpenModal} />}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProject
