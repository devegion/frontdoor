'use client';
import { FormEvent, useState } from 'react';

import { Card, CardBody } from '@heroui/card';
import { Form } from '@heroui/form';
import { Button } from '@heroui/button';
import { Input, Textarea } from '@heroui/input';

import { Send } from 'lucide-react';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/shared/utils/cn';
import z from 'zod';
import { addToast } from '@heroui/toast';

async function postForm(formData: Record<string, string>) {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const initialFormState: Record<string, string> = {
  access_key: 'b437479c-c908-4d3e-83f7-f4552ebe5bf1',
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm({ className }: { className?: ClassNameValue }) {
  const [formData, setFormData] = useState({ ...initialFormState });
  const [isLoading, setIsLoading] = useState(false);

  const nameSchema = z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be less than 50 characters');
  const emailSchema = z.email('Please enter a valid email address');
  const subjectSchema = z
    .string()
    .min(3, 'Subject must be at least 3 characters long')
    .max(100, 'Subject must be less than 50 characters');
  const messageSchema = z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message must be less than 1000 characters');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const success = await postForm(formData);
    if (success) {
      addToast({
        color: 'success',
        title: 'Message sent successfully.',
        description: 'We will come back to you in a short time.',
      });
    } else {
      addToast({
        color: 'danger',
        title: 'Message could not be sent.',
        description: 'Please try again later.',
      });
    }

    setIsLoading(false);
    setFormData({ ...initialFormState });
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardBody>
        <Form onSubmit={onSubmit} className='space-y-4'>
          <div className='flex w-full flex-col gap-4 lg:flex-row'>
            <Input
              classNames={{ errorMessage: 'block' }}
              variant='faded'
              radius='lg'
              name='name'
              label='Name'
              value={formData.name}
              validate={(value) => {
                try {
                  nameSchema.parse(value);
                  return null;
                } catch (error) {
                  if (error instanceof z.ZodError) {
                    return error.issues[0].message;
                  }
                  return 'Name is invalid';
                }
              }}
              onValueChange={(value) => setFormData({ ...formData, name: value })}
            />
            <Input
              variant='faded'
              radius='lg'
              name='email'
              type='email'
              label='Email'
              value={formData.email}
              validate={(value) => {
                try {
                  emailSchema.parse(value);
                  return null;
                } catch (error) {
                  if (error instanceof z.ZodError) {
                    return error.issues[0].message;
                  }
                  return 'Email is invalid';
                }
              }}
              onValueChange={(value) => setFormData({ ...formData, email: value })}
            />
          </div>
          <Input
            variant='faded'
            radius='lg'
            name='subject'
            label='Subject'
            value={formData.subject}
            validate={(value) => {
              try {
                subjectSchema.parse(value);
                return null;
              } catch (error) {
                if (error instanceof z.ZodError) {
                  return error.issues[0].message;
                }
                return 'Subject is invalid';
              }
            }}
            onValueChange={(value) => setFormData({ ...formData, subject: value })}
          />
          <Textarea
            variant='faded'
            radius='lg'
            name='message'
            label='Message'
            minRows={4}
            maxRows={4}
            value={formData.message}
            validate={(value) => {
              try {
                messageSchema.parse(value);
                return null;
              } catch (error) {
                if (error instanceof z.ZodError) {
                  return error.issues[0].message;
                }
                return 'Message is invalid';
              }
            }}
            onValueChange={(value) => setFormData({ ...formData, message: value })}
          />
          <Button
            isLoading={isLoading}
            color='primary'
            endContent={<Send className='size-[1.25em]' />}
            radius='lg'
            variant='faded'
            className='w-full'
            type='submit'>
            Send Message
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}
