import { User } from '../../user/entities/user.entity';
import { DataSource } from 'typeorm';

export class ClientSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const clientRepository = dataSource.getRepository(User);

    const users = [
        {
            username: 'john_doe',
            password: 'password123',
            updatePassword: false,
            avatarUrl: 'https://example.com/avatar1.jpg',
            profileUrl: 'https://example.com/profile1',
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Main St',
            city: 'Anytown',
            birthday: new Date('1990-01-01'),
            zipCode: 12345,
            phoneNumber: '555-1234',
            email: 'john_doe@example.com',
            observations: 'User 1 observation',
        },
        {
            username: 'jane_smith',
            password: 'password456',
            updatePassword: false,
            avatarUrl: 'https://example.com/avatar2.jpg',
            profileUrl: 'https://example.com/profile2',
            firstName: 'Jane',
            lastName: 'Smith',
            address: '456 Oak St',
            city: 'Othertown',
            birthday: new Date('1992-02-02'),
            zipCode: 67890,
            phoneNumber: '555-5678',
            email: 'jane_smith@example.com',
            observations: 'User 2 observation',
        },
        // Agrega al menos 8 usuarios más aquí
        {
            username: 'alice_jones',
            password: 'password789',
            updatePassword: true,
            avatarUrl: 'https://example.com/avatar3.jpg',
            profileUrl: 'https://example.com/profile3',
            firstName: 'Alice',
            lastName: 'Jones',
            address: '789 Pine St',
            city: 'Elsewhere',
            birthday: new Date('1988-03-03'),
            zipCode: 24680,
            phoneNumber: '555-6789',
            email: 'alice_jones@example.com',
            observations: 'User 3 observation',
        },
        // ...
    ];

    // Insertar los datos en la base de datos
    await clientRepository.save(users);

    console.log('Datos agregados correctamente.');
  }
}


